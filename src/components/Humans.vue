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
  name: "HumanKill",
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
            label: "Вбито русні",
            backgroundColor: "#f87979",
            // eslint-disable-next-line prettier/prettier
            data: [9600, 11790, 5430, 7000, 4900, 5080, 6870, 11260, 12210, 16410, 16520, 7850],
          },
        ],
      },
    };
  },
};
</script>
