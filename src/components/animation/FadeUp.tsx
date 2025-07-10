"use client"

import { motion } from "motion/react";

export default function FadeUp({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}
