import {Controller} from "@hotwired/stimulus"

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default class extends Controller {
    static targets = ['myChart'];

    canvasContext() {
        return this.myChartTarget.getContext('2d');
    }

    connect() {
        new Chart(this.canvasContext(), {
            type: 'line',
            data: {
                labels: ['07.20', '07.21', '07.22', '07.23', '07.24', '07.25', '07.26', '07.27'],
                datasets: [{
                    label: 'Ibuprophen',
                    data: [ ,'yes', 'no', 'no', 'yes', 'yes', ],
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    tension: 0.1
                },{
                    label: 'Seromycin',
                    data: [ 'yes', 'yes', 'no', 'yes', 'yes', 'no', 1],
                    fill: false,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    tension: 0.1
                }
                ]
            },
            options: {
                responsive: true,
                scales: {
                  x: {
                    display: true,
                    title: {
                      display: true,
                      text: 'Days',
                      color: '#911',
                      font: {
                        family: 'Comic Sans MS',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2,
                      },
                      padding: {top: 20, left: 0, right: 0, bottom: 0}
                    }
                  },
                  y: {
                    type: 'category',
                    labels: ['yes', 'no'],
                    display: true,
                    title: {
                      display: true,
                      text: 'Get medications',
                      color: '#191',
                      font: {
                        family: 'Times',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                      },
                      padding: {top: 30, left: 0, right: 0, bottom: 0}
                    }
                  }
                }
            }
        });
    }
}
