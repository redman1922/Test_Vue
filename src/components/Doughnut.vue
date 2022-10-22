<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { computed } from "vue";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
    costsList: {},
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#DD1B16",
              "#DD1654",
              "#DD1744",
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  mounted() {
    this.chartData = this.$store.subscribe((mutation, state) => {
      this.chartData = { ...this.$store.getters.getChartData };
      console.log(typeof this.chartData);
    });
  },
};
// methods: {
//   getTotalValue() {
//     let a = undefined;
//     a = this.$store.getters.getCostsList.reduce((acc, cost) => {
//       const costCateg = cost.category;
//       const same = acc.find(element => element.category === costCateg);
//       if (same !== undefined) same.value += cost.value;
//       else acc.push(cost);
//       return acc;
//     }, []);

//     return {labels: a.map(el =>
//       el.category
//     ), datasets:[{data: a.map(el =>
//       el.value
//     ), backgroundColor: [
//             "#41B883",
//             "#E46651",
//             "#00D8FF",
//             "#DD1B16",
//             "#DD1654",
//             "#DD1744"
//           ]}]}

//     // this.$set(this.chartData, "labels", a.map(el =>
//     //   el.category
//     // ));

//     // this.$set(this.chartData.datasets[0], "data", a.map(el =>
//     //   el.value
//     // ))
//   },
// },

// computed: {
//   isCost() {
//     console.log(
//       (this.labels = this.$store.getters.getCostsList.map(cost => cost))
//     );
//   },
// },
// };
</script>
