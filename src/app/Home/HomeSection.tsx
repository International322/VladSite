import styles from './Home.module.scss';

export interface HomeSectionProps {
	children: React.ReactNode;
	id: number;
	src: string;
	className?: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({
	children,
	id,
	src,
	className,
	...props
}) => {
	return (
		<section className={className}>
			<div className={styles.container}>{children}</div>
		</section>
	);
};

export default HomeSection;
