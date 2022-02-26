import { useEffect, useState } from 'react';

export function useDimensions() {
	const [width, setWidth] = useState<Number>(0);

	function handleResize() {
		setWidth(width);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { width };
}
