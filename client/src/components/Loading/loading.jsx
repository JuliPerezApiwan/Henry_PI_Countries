import style from './loading.module.css'

export default function Loading() {
    return (
        <div className={style.container}>
            <div className={style.leap_frog}>
                <div className={style.leap_frog__dot}></div>
                <div className={style.leap_frog__dot}></div>
                <div className={style.leap_frog__dot}></div>
            </div>
        </div>
    )
}