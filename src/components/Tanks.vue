<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// eslint-disable-next-line prettier/prettier
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "TanksComponent",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "Лютий",
          "Березень",
          "Квітень",
          "Травень",
          "Червень",
          "Липень",
          "Серпень",
          "Вересень",
          "Жовтень",
          "Листопад",
          "Грудень",
          "Січень",
        ],
        datasets: [
          {
            label: "Знищено бойових танків",
            // eslint-disable-next-line prettier/prettier
            backgroundColor: "#f87979",
            // eslint-disable-next-line prettier/prettier
            data: [191, 416, 383, 332, 212, 186, 229, 357, 344, 217, 114, 75],
          },
        ],
      },
    };
  },
};
</script>
