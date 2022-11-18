import Button from '../components/Button';
import Modal from '../components/Modal';

export const makeSubmitButton = (isAnswer, rightMessage, wrongMessage, info) =>
    new Promise(resolve => {
        const loadModal = async () => {
            const answer = isAnswer();
            const modal = new Modal({ answer, message: answer ? rightMessage : wrongMessage, info });
            await modal.render();
            resolve();
        };

        new Button(loadModal);
    });
