import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipModel
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartTooltip } from './ChartTooltip';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DataPoint {
  time: string;
  android: number;
  ios: number;
}

const mockData: DataPoint[] = [
  { time: '14:10', android: 20, ios: 15 },
  { time: '14:20', android: 35, ios: 25 },
  { time: '14:30', android: 30, ios: 20 },
  { time: '14:40', android: 45, ios: 30 },
  { time: '14:50', android: 25, ios: 20 },
  { time: '15:00', android: 35, ios: 25 },
  { time: '15:10', android: 45, ios: 30 },
  { time: '15:20', android: 30, ios: 25 },
  { time: '15:30', android: 50, ios: 35 }
];

const COLORS = {
  android: '#10B981',
  ios: '#F59E0B'
};

export const LiveUserActivity: React.FC = () => {
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const externalTooltipHandler = (context: { chart: any; tooltip: TooltipModel<'line'> }) => {
    const { chart, tooltip } = context;
    const tooltipEl = tooltipRef.current;

    if (!tooltipEl) return;

    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = '0';
      return;
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Set tooltip position
    tooltipEl.style.opacity = '1';
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.transform = 'translate(-50%, -100%)';

    if (tooltip.body) {
      const dataIndex = tooltip.dataPoints[0].dataIndex;
      const timeLabel = mockData[dataIndex].time;
      
      // Render tooltip content using React
      const root = document.createElement('div');
      const tooltipContent = (
        <ChartTooltip
          title={timeLabel}
          items={[
            { label: 'Android', value: mockData[dataIndex].android, color: COLORS.android },
            { label: 'iOS', value: mockData[dataIndex].ios, color: COLORS.ios }
          ]}
        />
      );
      
      // @ts-ignore
      import('react-dom/client').then(({ createRoot }) => {
        const tooltipRoot = createRoot(root);
        tooltipRoot.render(tooltipContent);
        tooltipEl.innerHTML = '';
        tooltipEl.appendChild(root);
      });
    }
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        }
      },
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
        mode: 'index',
        intersect: false
      },
      title: {
        display: true,
        text: 'Live User Activity',
        align: 'start' as const,
        padding: {
          bottom: 10
        },
        color : 'black'
        ,
        font: {
          size: 21,
          weight: 600
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        max: 75,
        ticks: {
          stepSize: 25
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hoverRadius: 6
      }
    },
    hover: {
      mode: 'index',
      intersect: false
    }
  };

  const data = {
    labels: mockData.map(d => d.time),
    datasets: [
      {
        label: 'Android',
        data: mockData.map(d => d.android),
        borderColor: COLORS.android,
        backgroundColor: COLORS.android,
        pointBackgroundColor: COLORS.android,
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: COLORS.android,
        borderWidth: 4,
      },
      {
        label: 'iOS',
        data: mockData.map(d => d.ios),
        borderColor: COLORS.ios,
        backgroundColor: COLORS.ios,
        pointBackgroundColor: COLORS.ios,
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: COLORS.ios,
        borderWidth: 4,
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm max-csm:p-0 ">
        
      <div className="h-[300px] relative">
        <Line options={options} data={data} />
        <div 
          ref={tooltipRef}
          className="absolute pointer-events-none transition-opacity duration-200"
          style={{ opacity: 0 }}
        />
      </div>
    </div>
  );
};