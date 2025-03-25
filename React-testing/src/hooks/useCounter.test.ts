import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
    it('should return initial count as 0', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    it('should increment count by 1', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.increment(); 
        });

        expect(result.current.count).toBe(1);
    });

    it('should decrement count by 1', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(-1);
    });
});
