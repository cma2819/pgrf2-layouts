import { SpeedcontrolInstance } from '../nodecg/speedcontrol';
import { BundleNodecgInstance, NodeCG } from './nodecg';

export = (nodecg: NodeCG): void => {

  const scoreReplicant = (nodecg as BundleNodecgInstance).Replicant('runner-scores', {
    defaultValue: []
  });

  const activeRunSurrounding = (nodecg as SpeedcontrolInstance).Replicant('runDataActiveRunSurrounding', 'nodecg-speedcontrol');
  const runDataArray = (nodecg as SpeedcontrolInstance).Replicant('runDataArray', 'nodecg-speedcontrol');

  activeRunSurrounding.on('change', (newVal) => {
    const current = newVal.current;

    const currentRun = runDataArray.value?.find(run => run.id === current);

    if (!currentRun) {
      scoreReplicant.value = [];
      return;
    }

    scoreReplicant.value = currentRun.teams.map(team => ({
      id: team.id,
      score: null,
    }));
  });

}