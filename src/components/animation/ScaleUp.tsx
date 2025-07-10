"use client";

import { motion } from "motion/react";

export default function ScaleUp({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, scaleY: 0 }}
			whileInView={{ opacity: 1, scaleY: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.2, ease: "easeOut" }}
			style={{ originY: 0.5 }}
		>
			{children}
		</motion.div>
	);
}
