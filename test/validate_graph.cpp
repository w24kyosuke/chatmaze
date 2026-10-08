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
    regex card_pattern(R"REGEX(id:\s*"([^"]+)"[\s\S]*?next:\s*\[([\s\S]*?)\])REGEX");
    regex next_pattern(R"REGEX("([^"]+)")REGEX");

    vector<string> nodes;
    unordered_map<string, vector<string>> edges;
    unordered_map<string, vector<string>> reverse_edges;

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
        for (const string& next_node : next_nodes) {
            reverse_edges[next_node].push_back(node_id);
        }
    }

    if (nodes.empty()) {
        cerr << "Error: No nodes found." << endl;
        return 1;
    }

    vector<string> sources;
    vector<string> sinks;

    for (const string& node : nodes) {
        if (edges[node].empty()) {
            sinks.push_back(node);
        }
        if (reverse_edges[node].empty()) {
            sources.push_back(node);
        }
    }

    cout << "Loaded " << nodes.size() << " cards." << endl;
    cout << "Found " << sources.size() << " Sources and " << sinks.size() << " Sinks." << endl;

    if (sources.empty() || sinks.empty()) {
        cerr << "❌ Error: Graph must have at least one Source and at least one Sink." << endl;
        return 1;
    }

    // Test 1: All nodes reachable from at least one source
    unordered_set<string> reachable_from_sources;
    for (const string& source : sources) {
        dfs(source, edges, reachable_from_sources);
    }
    
    bool test1_passed = true;
    for (const string& node : nodes) {
        if (reachable_from_sources.find(node) == reachable_from_sources.end()) {
            cout << "❌ Error: Node '" << node << "' cannot be reached from any source." << endl;
            test1_passed = false;
        }
    }

    // Test 2: All nodes can reach at least one sink
    unordered_set<string> can_reach_sink;
    for (const string& sink : sinks) {
        dfs(sink, reverse_edges, can_reach_sink);
    }

    bool test2_passed = true;
    for (const string& node : nodes) {
        if (can_reach_sink.find(node) == can_reach_sink.end()) {
            cout << "❌ Error: Node '" << node << "' cannot reach any sink (dead end or infinite loop)." << endl;
            test2_passed = false;
        }
    }

    cout << "------------------------------" << endl;
    if (test1_passed && test2_passed) {
        cout << "✅ Success: The graph is a valid Source-Sink connected component!" << endl;
        return 0;
    } else {
        cout << "❌ Failure: The graph validation failed." << endl;
        return 1;
    }
}
