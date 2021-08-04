import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from 'vee-validate';
import { required, min, max, alpha_spaces as alphaSpaces, email, confirmed } from '@vee-validate/rules';
export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage)
        defineRule('required', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('alpha_spaces', alphaSpaces);
        defineRule('email', email);
        defineRule('confirmed', confirmed);
        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `${ctx.field} فارغ  `,
                    min: `${ctx.field} قصير جدا  `,
                    max: `${ctx.field} طويل جدا  `,
                    email: `${ctx.field} غير صالح  `,
                    confirmed: ` لا يوجد تطابق  `,
                };
                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `هذا  ${context.field} الحقل غير صالح ${context.field}`
                return message;
            },
        });

    },

};