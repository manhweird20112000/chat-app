import { useEffect, useState } from 'react';

interface WindowDimension {
	width: number;
	height: number;
}

export function useDimensions() {
	const [size, setSize] = useState<WindowDimension>({ width: 0, height: 0 });

	function handleResize() {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { size };
}
