// TODO: more efficient way to render image and imageURL:12/13

import styles from './projectEditForm.module.scss';

import { useContext, useState } from "react";
import { ModalDataContext, ModalDataDispatchContext } from "../../contexts/ModalDataContext";
import { Upload } from 'upload-js';
import { deleteType, visibilityType } from '../../helpers';

export default function ProjectEditForm({onSubmitForm}) {
    const modalData = useContext(ModalDataContext);
    const dispatch = useContext(ModalDataDispatchContext);
    const [imageUrl, setImageUrl] = useState(modalData?.data?.imgURL);
    const [loading, setIsLoading] = useState(false);

    const handleImageUpload = async e => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const upload = Upload({
                apiKey: "public_W142i2QFQESQNm6Gbd3VFoqfLSbL"
            });

            try {
                setIsLoading(true);
                const { fileUrl, filePath } = await upload.uploadFile(file);
                dispatch({
                    type: modalData.requestType,
                    data: { ...modalData.data, imgURL: fileUrl }
                });
                setImageUrl(fileUrl);
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (modalData.requestType === deleteType || modalData.requestType === visibilityType) ? (
        <div className={styles.formPrompt}>
            <h4>are you sure?</h4>
            <button type='button' onClick={onSubmitForm}>yes</button>
        </div>
    ) : (
        <form onSubmit={onSubmitForm} className={styles.form}>
            <div className='input-container'>
                <span>Title</span>
                <input
                    type='text'
                    name='name'
                    defaultValue={modalData?.data?.name}
                    required
                    />
            </div>
            <label>
                Is Visible
                <input
                    type='checkbox'
                    name='isVisible'
                    defaultChecked={modalData?.data?.isVisible || false}
                    />
            </label>
            <div className='input-container'>
                <span>Description</span>
                <input
                    type='textarea'
                    name='description'
                    defaultValue={modalData?.data?.description}
                    required
                    />
            </div>
            <fieldset>
                {loading && <h3 className={styles.formLoading}>Loading . . .</h3>}
                <span>Image URL</span>
                <div className='input-container'>
                    <input
                        type='string'
                        name='imgURL'
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <h3>or</h3>
                <div className={styles.formImage}>
                    <input
                        type='file'
                        onChange={handleImageUpload}
                    />
                    <div>
                        <img src={modalData?.data?.imgURL} alt="" />
                    </div>
                </div>
            </fieldset>
            <div className='input-container'>
                <span>Project URL</span>
                <input
                    type='string'
                    name='redirrect'
                    defaultValue={modalData?.data?.redirrect}
                    required
                    />
            </div>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}