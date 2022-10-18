import DropDown from "../components/DropDown";
import ConfirmButton from "../components/ConfirmButton";
import Counter from "../components/Counter";
import getMaxCount from "./getMaxCount";
import Input from "./Input";
import styles from "./Passengers.module.css";

export default function Passengers({ values, onChange }) {
    const max = getMaxCount({ passengers: values });
    const count = values.adults + values.children + values.infants;

    function normalize(value) {
        const preValues = { ...values, ...value };
        const max = getMaxCount({ passengers: preValues });
        onChange(
            Object.keys(preValues).reduce((acc, key) => {
                acc[key] =
                    preValues[key] > max[key] ? max[key] : preValues[key];
                return acc;
            }, {})
        );
    }

    return (
        <DropDown value={count} className={styles.passengers}>
            <DropDown.Toggle>
                {({ ...props }, ref) => <Input {...props} ref={ref} />}
            </DropDown.Toggle>
            <DropDown.Menu>
                {() => (
                    <>
                        <div className={styles.listItem}>
                            Взрослые
                            <Counter
                                value={values.adults}
                                min={1}
                                max={max.adults}
                                onChange={(adults) => normalize({ adults })}
                            />
                        </div>
                        <div className={styles.listItem}>
                            Дети до 12 лет
                            <Counter
                                value={values.children}
                                min={0}
                                max={max.children}
                                onChange={(children) => normalize({ children })}
                            />
                        </div>
                        <div className={styles.listItem}>
                            <div>
                                <div>Дети до 2 лет</div>
                                <div className={styles.sub}>Без места</div>
                            </div>
                            <Counter
                                value={values.infants}
                                min={0}
                                max={max.infants}
                                onChange={(infants) => normalize({ infants })}
                            />
                        </div>
                    </>
                )}
            </DropDown.Menu>
            <DropDown.ModalMenu>
                {({ onClose }) => (
                    <DropDown.ModalMenuContent>
                        <h3 className={styles.title}>Выберите пассажиров</h3>
                        <div className={styles.modalItem}>
                            <div>
                                <div>Взрослые</div>
                                <div className={styles.sub}>старше 12 лет</div>
                            </div>
                            <Counter
                                value={values.adults}
                                min={1}
                                max={max.adults}
                                onChange={(adults) => normalize({ adults })}
                            />
                        </div>
                        <div className={styles.modalItem}>
                            <div>
                                <div>Дети</div>
                                <div className={styles.sub}>до 12 лет</div>
                            </div>
                            <Counter
                                value={values.children}
                                min={0}
                                max={max.children}
                                onChange={(children) => normalize({ children })}
                            />
                        </div>
                        <div className={styles.modalItem}>
                            <div>
                                <div>Младенцы</div>
                                <div className={styles.sub}>
                                    до 2 лет без места
                                </div>
                            </div>
                            <Counter
                                value={values.infants}
                                min={0}
                                max={max.infants}
                                onChange={(infants) => normalize({ infants })}
                            />
                        </div>
                        <ConfirmButton type="button" onClick={onClose}>
                            Выбрать
                        </ConfirmButton>
                    </DropDown.ModalMenuContent>
                )}
            </DropDown.ModalMenu>
        </DropDown>
    );
}
