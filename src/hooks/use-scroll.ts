import { ScrollCallback } from 'lenis';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export const useScroll = (callback: ScrollCallback, deps = []) => {
	const lenis = useLenis();

	useEffect(() => {
		if (!lenis) return;
		lenis.on('scroll', callback);

		return () => {
			lenis.off('scroll', callback);
		};
	}, [lenis, callback, deps]);
};
