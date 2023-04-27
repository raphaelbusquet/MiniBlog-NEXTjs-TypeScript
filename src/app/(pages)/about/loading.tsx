import styles from "./styles.module.css"

const loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <span className={styles.loader}></span>
    </div>
  )
}

export default loading