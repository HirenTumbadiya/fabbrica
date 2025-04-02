import styles from './styles.module.css';

interface Props {
    text: string;
}

export default function VerticalAnimationText({ text }: Props) {
    const splitText = (text: string) => {
        return text.split('').map((letter, index) => (
            <span
                key={index}
                className={styles.letter}
                style={{ '--index': index } as React.CSSProperties}
            >
                {letter}
            </span>
        ));
    };


    return (
        <div className={styles.menuLink}>
            <span className={styles.menuText}>
                <span className={styles.original}>{splitText(text)}</span>
                <span className={styles.hover}>{splitText(text)}</span>
            </span>
        </div>
    );
}