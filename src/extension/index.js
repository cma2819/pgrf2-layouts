"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (nodecg) {
    var scoreReplicant = nodecg.Replicant('runner-scores', {
        defaultValue: []
    });
    var activeRunSurrounding = nodecg.Replicant('runDataActiveRunSurrounding', 'nodecg-speedcontrol');
    var runDataArray = nodecg.Replicant('runDataArray', 'nodecg-speedcontrol');
    activeRunSurrounding.on('change', function (newVal) {
        var _a;
        var current = newVal.current;
        var currentRun = (_a = runDataArray.value) === null || _a === void 0 ? void 0 : _a.find(function (run) { return run.id === current; });
        if (!currentRun) {
            scoreReplicant.value = [];
            return;
        }
        scoreReplicant.value = currentRun.teams.map(function (team) { return ({
            id: team.id,
            score: null,
        }); });
    });
});
