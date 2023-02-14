import { renderHook, act } from '@testing-library/react-hooks';
import { useDropdown } from './useDropdown';

describe('useDropdown', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => useDropdown());
    const [selectedCity, handleSelectCity, dropdownOpen, setDropdownOpen] = result.current;
    expect(selectedCity).toBe('All Cities');
    expect(typeof handleSelectCity).toBe('function');
    expect(dropdownOpen).toBe(false);
    expect(typeof setDropdownOpen).toBe('function');
  });

  it('should update selectedCity when handleSelectCity is called', () => {
    const { result } = renderHook(() => useDropdown());
    const [selectedCity, handleSelectCity] = result.current;
    act(() => {
      handleSelectCity('Berlin');
    });
    expect(result.current[0]).toBe('Berlin');
  });

  it('should update dropdownOpen when setDropdownOpen is called', () => {
    const { result } = renderHook(() => useDropdown());
    const [selectedCity, handleSelectCity, dropdownOpen, setDropdownOpen] = result.current;
    act(() => {
      setDropdownOpen(true);
    });
    expect(result.current[2]).toBe(true);
  });
});
