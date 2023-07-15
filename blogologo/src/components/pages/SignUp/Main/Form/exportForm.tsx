import React from 'react'
import InputForm from '.'
import Submit from '../../ButtonSignUp'
import style from './style.module.scss'


export const ExportForm = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
    }
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <InputForm
                inputClassName={style.name}
                title={'Name'}
                placeholder={'Your name'}
                isError={false}
                errorMessage={'Cannot be empty'}
            />
            <InputForm
                inputClassName={style.email}
                title={'Email'}
                placeholder={'Your email'}
                isError={false}
                errorMessage={'Cannot be empty'}
            />
            <InputForm
                inputClassName={style.password}
                title={'Password'}
                placeholder={'Your password'}
                isError={false}
                errorMessage={'Cannot be empty'}
            />
            <InputForm
                inputClassName={style.confirmPassword}
                title={'Confirm password'}
                placeholder={'Confirm password'}
                isError={false}
                errorMessage={'Cannot be empty'}
            />
            <Submit text={'Sign Up'} />
        </form>
    )
}

// import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux/es/hooks/useDispatch'
// import { useNavigate } from 'react-router-dom'
// import InputForm from '.'
// import { registrationAction } from '../../../../api/store/registration/actions'
// import Submit from '../../ButtonSignUp'
// import SignUpButton from '../../ButtonSignUp/exportSignUp'
// import style from './style.module.scss'

// export const ExportForm = () => {

//     const v = new FastestValidator();
// 	const check = v.compile({
// 		name: 'string',
// 		email: "string",
// 		password: "string",
// 		confirmPassword: "string"
// 	})

//     const dispatch = useDispatch<AppDispatch>()
//     const navigate = useNavigate
//     const [form, setForm] = useState<FormType>({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     })

//     const errors = useSelector((state: AppState) => state.registration.errors)

//     useEffect(() => {
// 		if (errors) {
// 			setFormErrors(errors)
// 		}
// 	}, [errors])

//     const [form, setForm] = useState<FormType>({
// 		username: '',
// 		email: '',
// 		password: '',
// 		confirmPassword: ''
// 	})
// 	const [formErrors, setFormErrors] = useState<FormErrorsType>({})

//     const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
// 		setForm({
// 			...form,
// 			[e.target.name]: e.target.value
// 		})
// 	}, [form])

//     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault()
//         const { name, email, password, confirmPassword } = form
//         setFormErrors({})

//         const validationFormObj: FormErrorsType = getSignUpValidationObj(name, email, password, confirmPassword)
// 		const checkResult = check(validationFormObj)

//         if (checkResult === true) {
// 			if (password && confirmPassword && (password !== confirmPassword)) {
// 				setFormErrors({
// 					...formErrors,
// 					confirmPassword: 'The entered passwords do not match.',
// 					password: 'The entered passwords do not match.'
// 				})
// 			}

//             const regSuccessFunc = () => navigate('/registration-confirmation', {
//                 replace: true,
//                 state: email
//             })

//             if (name && email && password && password === confirmPassword) {
//                 dispatch(registrationAction(name, email, password, regSuccessFunc))
//             }
//         }

//         else {
// 			const validationErrors = checkResult as ValidationError[]
// 			const formErrors = validationErrors.reduce((total, current) => {
// 				total[current.field] = current.message
// 				return total
// 			}, {} as any) as FormErrorsType

// 			setFormErrors(formErrors)
// 		}
//     }

//     return (
//         <form className={style.form} onSubmit={handleSubmit}>
//             <InputForm
//                 inputClassName={style.name}
//                 title={'Name'}
//                 placeholder={'Your name'}
//                 name={'username'}
//                 onChange={onChangeFormElement}
//             />
//             {
// 						formErrors.name &&
// 						<ErrorLabel text={formErrors.name} />
// 					}
//             <InputForm
//                 inputClassName={style.email}
//                 title={'Email'}
//                 placeholder={'Your email'}
//                 name={'email'}
//                 onChange={onChangeFormElement}
//             />
//             {
// 						formErrors.email &&
// 						<ErrorLabel text={formErrors.email} />
// 					}
//             <InputForm
//                 inputClassName={style.password}
//                 title={'Password'}
//                 placeholder={'Your password'}
//                 name={'password'}
//                 onChange={onChangeFormElement}
//             />
//             {
// 						formErrors.password &&
// 						<ErrorLabel text={formErrors.password} />
// 					}
//             <InputForm
//                 inputClassName={style.confirmPassword}
//                 title={'Confirm password'}
//                 placeholder={'Confirm password'}
//                 name={'confirm password'}
//                 onChange={onChangeFormElement}
//             />
//             {
// 						formErrors.confirmPassword &&
// 						<ErrorLabel text={formErrors.confirmPassword} />
// 					}
//             <Submit text={'Sign Up'} />
//         </form>
//     )
// }