export default function validation() {
    $(document).ready(function() {
        $('.form').validate({
            rules : {
                name: {
                    required: true,
                    minlength: 3,
                },
                surname: {
                    required: true,
                    minlength: 3,
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                    email:true,
                }
            },
            
            messages : {
                name: {
                    required: "Обязательное поле",
                    minlength: "Имя должно содержать минимум 3 символа",
                },
                surname: {
                    required: "Обязательное поле",
                    minlength: "Фамилия должна содержать минимум 3 символа",
                },
                phone: {
                    required: "Обязательное поле",
                },
                email: {
                    required: "Обязательное поле",
                    email: "Адрес электонной почты должен быть в формате: example@icloud.com"
                }
            }
        });
    });
}

