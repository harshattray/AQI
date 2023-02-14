import { renderHook } from '@testing-library/react-hooks';
import { useGraphData } from './useGraphData';

describe('useGraphData', () => {
  const mockData = [
    {
      city: 'Berlin',
      value: 10,
      unit: 'µg/m³',
      date: { local: '2022-01-01T00:00:00+01:00' },
      parameter: 'pm25',
      location: 'Station 1',
    },
    {
      city: 'Berlin',
      value: 20,
      unit: 'µg/m³',
      date: { local: '2022-01-01T01:00:00+01:00' },
      parameter: 'pm25',
      location: 'Station 1',
    },
    {
      city: 'Berlin',
      value: 30,
      unit: 'µg/m³',
      date: { local: '2022-01-01T02:00:00+01:00' },
      parameter: 'pm25',
      location: 'Station 1',
    },
  ];

  it('should transform the data correctly', () => {
    const { result } = renderHook(() => useGraphData(mockData));

    expect(result.current.graphData).toEqual([
      {
        location: 'Station 1',
        pm25: 10,
        date: '01-01-2022 00:00:00',
      },
      {
        location: 'Station 1',
        pm25: 20,
        date: '01-01-2022 01:00:00',
      },
      {
        location: 'Station 1',
        pm25: 30,
        date: '01-01-2022 02:00:00',
      },
    ]);
    expect(result.current.xAxisKey).toBe('location');
  });
});
