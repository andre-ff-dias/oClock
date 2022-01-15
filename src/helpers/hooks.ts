import React, { useEffect, useRef } from "react";

// From Dan Abramov https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// From https://gist.github.com/babakness/faca3b633bc23d9a0924efb069c9f1f5
type IntervalFunction = () => (unknown | void)

export function useInterval(callback: IntervalFunction, delay: number | null) {

    const savedCallback = useRef<IntervalFunction | null>(null)

    // Remember the latest callback.
    useEffect(() => {
        if (delay === null) return;
        savedCallback.current = callback
    })

    // Set up the interval.
    useEffect(() => {
        if (delay === null) return;
        function tick() {
            if (savedCallback.current !== null) {
                savedCallback.current()
            }
        }
        const id = setInterval(tick, delay)
        return () => clearInterval(id)

    }, [delay])
}