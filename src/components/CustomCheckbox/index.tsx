import styles from './style.module.css'

const index = (props : IdProp) => {
  return (
    <label className={styles.container}>
        <input type="checkbox" id={'cb-' + String(props.id)} />
        <span className={styles.checkmark}></span>
    </label>
  )
}

type IdProp = {
    id : string
}

export default index