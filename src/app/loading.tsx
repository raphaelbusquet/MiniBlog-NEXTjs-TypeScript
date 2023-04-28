import styles from "./loading.module.css"

const loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <span className={`${styles.loader} text-9xl`}></span>
    </div>
  )
}

export default loading