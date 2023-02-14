import { renderHook } from '@testing-library/react-hooks';
import { useDataFetching } from './useDataFetching';

test('useDataFetching returns the expected data', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useDataFetching());

  expect(result.current).toEqual([[], [], []]);

  await waitForNextUpdate();

  expect(result.current[0].length).toBeGreaterThan(0);
  expect(result.current[1].length).toBeGreaterThan(0);
  expect(result.current[2].length).toBeGreaterThan(0);
});
