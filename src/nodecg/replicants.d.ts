import { Assets } from "./asset";
import { RunnerScores } from './generated';

type ReplicantMap = {
  'assets:background': Assets;
  'assets:logo': Assets;
  'runner-scores': RunnerScores;
};

export {
    Assets,
    RunnerScores,
    ReplicantMap,
};
