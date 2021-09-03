<template>
  <v-app :style="{minHeight: '520px'}">
    <v-container>
      <v-row
        align="center"
        v-for="(score, index) in scores"
        :key="index"
      >
        <v-col cols="8">
          <v-text-field
            :label="`team${index}`"
            v-model.number="score.score"
            size="16"
            type="number"
            class="score"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-tooltip v-if="repScores[index].score === null" top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success"
                dark
                v-bind="attrs"
                v-on="on"
                @click="setScore(index)"
                :disabled="!edited(index)"
              >
                <v-icon>
                  fas fa-check
                </v-icon>
              </v-btn>
            </template>
            <span>set score</span>
          </v-tooltip>
          <v-tooltip v-if="repScores[index].score !== null" top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="info"
                dark
                v-bind="attrs"
                v-on="on"
                @click="setScore(index)"
                :disabled="!edited(index)"
              >
                <v-icon>
                  fas fa-sync-alt
                </v-icon>
              </v-btn>
            </template>
            <span>update score</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="warning"
                dark
                v-bind="attrs"
                v-on="on"
                :disabled="repScores[index].score === null"
                @click="clearScore(index)"
              >
                <v-icon>
                  fas fa-eraser
                </v-icon>
              </v-btn>
            </template>
            <span>delete score</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.score input {
  text-align: right;
}
</style>

<script lang="ts">
/* global nodecg */

const bundleNodecg = nodecg as BundleNodecgInstance;
const runnnerScoresRep = bundleNodecg.Replicant('runner-scores');

import { Vue, Component } from 'vue-property-decorator';
import { RunnerScores } from '../../../nodecg/generated';
import { BundleNodecgInstance } from '../../global';
import clone from 'clone';

@Component
export default class App extends Vue {
  scores: RunnerScores = [];
  repScores: RunnerScores = [];
  
  created() {
    runnnerScoresRep.on('change', (newVal) => {
      this.scores = clone(newVal);
      this.repScores = newVal;
    });
  }

  setScore(index: number) {
    if (runnnerScoresRep.value) {
      runnnerScoresRep.value[index] = this.scores[index];
    }
  }

  clearScore(index: number) {
    if (runnnerScoresRep.value) {
      runnnerScoresRep.value[index].score = null;
    }
  }

  edited(index: number) {
    return this.scores[index].score !== this.repScores[index].score;
  }

}
</script>
