import classes from './SeeMoreButton.module.css'

export default function SeeMoreButton({ expanded, toggleExpanded, expandedText, collapsedText, borderless = false }) {
  return (
    <div className={`${classes.button} ${!borderless ? classes.border : ""}`} onClick={toggleExpanded}>
      <p>{expanded ? expandedText: collapsedText}</p>
      <p className={`${expanded ? classes.iconRotate : ''}`}>&#9660;</p>
    </div>
  );
}
