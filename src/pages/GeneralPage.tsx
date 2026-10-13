import GeneralComponent from "../components/general-components/GeneralComponent.tsx";

// Компонент GeneralPage відповідає за відображення сторінки на якій представлені користувачі, пости та коментарі.
const GeneralPage = () => {
    // Повертаємо JSX-розмітку сторінки
    return (
        // Контейнер сторінки
        <div>
            {/* Вкладений компонент GeneralComponent відображає списки користувачів, постів і коментарів */}
            <GeneralComponent/>
        </div>
    );
};

// Експортуємо компонент для використання в налаштуваннях маршрутизації
export default GeneralPage;