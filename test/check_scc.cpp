#include <fstream>
#include <iostream>
#include <regex>
#include <sstream>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

void dfs(const string &node, const unordered_map<string, vector<string>> &graph,
         unordered_set<string> &visited) {
    visited.insert(node);
    if (graph.find(node) != graph.end()) {
        for (const string &neighbor : graph.at(node)) {
            if (visited.find(neighbor) == visited.end()) {
                dfs(neighbor, graph, visited);
            }
        }
    }
}

int main(int argc, char* argv[]) {
    string file_path = (argc > 1) ? argv[1] : "deck.js";
    ifstream file(file_path);

    if (!file.is_open()) {
        cerr << "Error: Could not find '" << file_path << "'" << endl;
        return 1;
    }

    stringstream buffer;
    buffer << file.rdbuf();
    string content = buffer.str();

    // Regex to match: id: "A1" ... next: ["A2", "A3"]
    regex card_pattern(R"REGEX(id:\s*"([^"]+)"[^}]+?next:\s*\[(.*?)\])REGEX");
    regex next_pattern(R"REGEX("([^"]+)")REGEX");

    vector<string> nodes;
    unordered_map<string, vector<string>> edges;

    auto words_begin =
        sregex_iterator(content.begin(), content.end(), card_pattern);
    auto words_end = sregex_iterator();

    for (sregex_iterator i = words_begin; i != words_end; ++i) {
        smatch match = *i;
        string node_id = match[1].str();
        string next_str = match[2].str();

        vector<string> next_nodes;
        auto next_begin =
            sregex_iterator(next_str.begin(), next_str.end(), next_pattern);
        auto next_end = sregex_iterator();

        for (sregex_iterator j = next_begin; j != next_end; ++j) {
            next_nodes.push_back((*j)[1].str());
        }

        nodes.push_back(node_id);
        edges[node_id] = next_nodes;
    }

    if (nodes.empty()) {
        cerr << "Error: No nodes found. Make sure deck.js contains 'id' and "
                "'next' properties formatted properly."
             << endl;
        return 1;
    }

    cout << "Loaded " << nodes.size() << " cards from deck.js." << endl;

    bool all_scc = true;
    for (const string &start_node : nodes) {
        unordered_set<string> visited;
        dfs(start_node, edges, visited);

        if (visited.size() != nodes.size()) {
            cout << "[!] Error: From card '" << start_node
                 << "', cannot reach cards: ";
            for (const string &n : nodes) {
                if (visited.find(n) == visited.end()) {
                    cout << n << " ";
                }
            }
            cout << endl;
            all_scc = false;
        }
    }

    cout << "------------------------------" << endl;
    if (all_scc) {
        cout << "✅ Success: The graph is a valid Strongly Connected Component "
                "(SCC)!"
             << endl;
        cout << "All cards can reach all other cards." << endl;
        return 0;
    } else {
        cout << "❌ Failure: The graph is NOT a single Strongly Connected "
                "Component."
             << endl;
        cout << "Check the dead-ends or unescapable loops in your deck."
             << endl;
        return 1;
    }
}
