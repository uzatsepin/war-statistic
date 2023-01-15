<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  123
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
            label: "Знищено БПЛА",
            // eslint-disable-next-line prettier/prettier
            backgroundColor: "#f87979",
            // eslint-disable-next-line prettier/prettier
            data: [3, 82, 160, 274, 126, 91, 115, 158, 406, 147, 274, 36],
          },
        ],
      },
    };
  },
};
</script>
