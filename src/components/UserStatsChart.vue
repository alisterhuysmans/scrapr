// src/components/UserStatsChart.vue
<template>
  <div>
    <canvas ref="userStatsChart"></canvas>
  </div>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, LineController, BarElement, BarController } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, LineController, BarElement, BarController);

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      default: null
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.userStatsChart.getContext('2d');
      new ChartJS(ctx, {
        type: this.type,
        data: {
          labels: this.getLabels(),
          datasets: [
            {
              label: this.label,
              data: this.data,
              backgroundColor: this.colors ? this.colors : this.getColor(),
              borderColor: this.colors ? this.colors : this.getColor(),
              fill: this.type === 'line' ? false : true,
              pointRadius: this.type === 'line' ? 5 : undefined
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            onComplete: () => {
              this.delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !this.delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            }
          },
          scales: {
            y: {
              grid: {
                color: 'rgba(185, 187, 190, 0.1)'
              },
              ticks: {
                precision: 0
              }
            },
            x: {
              grid: {
                color: 'rgba(185, 187, 190, 0.1)'
              }
            }
          }
        }
      });
    },
    getLabels() {
      const today = new Date();
      const labels = [];
      for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        labels.unshift(date.toLocaleDateString());
      }
      return labels;
    },
    getColor() {
      switch (this.label) {
        case 'Followers':
          return '#f87979';
        case 'Following':
          return '#7CBB00';
        case 'Posts':
          return '#00BBF2';
        case 'Total Follower Gain':
          return '#b9bbbe1a';
        default:
          return '#000000';
      }
    }
  },
  data() {
    return {
      delayed: false
    };
  }
}
</script>

<style scoped>
canvas {
  width: 100% !important;
  height: 400px !important;
}
</style>
