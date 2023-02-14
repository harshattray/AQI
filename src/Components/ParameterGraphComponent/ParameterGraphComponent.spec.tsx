import { render, screen } from '@testing-library/react';
import ParameterGraph from './ParameterGraphComponent';
import { useGraphData } from '../../hooks/useGraphData/useGraphData';

const data = [
  {
    city: 'Berlin',
    value: 50,
    unit: 'µg/m³',
    date: { local: '2022-02-14T11:00:00Z' },
    parameter: 'pm10',
    location: 'Location 1',
  },
  {
    city: 'Berlin',
    value: 30,
    unit: 'µg/m³',
    date: { local: '2022-02-14T11:10:00Z' },
    parameter: 'pm10',
    location: 'Location 1',
  },
  {
    city: 'Berlin',
    value: 70,
    unit: 'µg/m³',
    date: { local: '2022-02-14T11:20:00Z' },
    parameter: 'pm10',
    location: 'Location 1',
  },
];

const mockUseGraphData = jest.fn(() => ({
  graphData: [
    { location: 'Location 1', pm10: 50, date: '14-02-2022 12:00:00' },
    { location: 'Location 1', pm10: 30, date: '14-02-2022 12:10:00' },
    { location: 'Location 1', pm10: 70, date: '14-02-2022 12:20:00' },
  ],
  xAxisKey: 'location',
}));

jest.mock('./ParameterGraph', () => ({
  __esModule: true,
  useGraphData: jest.fn(),
}));

describe('ParameterGraph', () => {
  beforeEach(() => {
    mockUseGraphData.mockClear();
  });

  test('renders ParameterGraph component', () => {
    (useGraphData as jest.Mock).mockImplementationOnce(mockUseGraphData);

    render(
      <ParameterGraph data={data} parameter="pm10" width={600} height={400} />
    );

    const chart = screen.getByRole('img', { name: /My Line Chart/i });
    expect(chart).toBeInTheDocument();

    const xAxis = screen.getByText('location');
    expect(xAxis).toBeInTheDocument();

    const yAxis = screen.getByText('pm10');
    expect(yAxis).toBeInTheDocument();
  });

  test('useGraphData hook is called with data prop', () => {
    (useGraphData as jest.Mock).mockImplementationOnce(mockUseGraphData);

    render(
      <ParameterGraph data={data} parameter="pm10" width={600} height={400} />
    );

    expect(mockUseGraphData).toHaveBeenCalledTimes(1);
    expect(mockUseGraphData).toHaveBeenCalledWith(data);
  });
});
