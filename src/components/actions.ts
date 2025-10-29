'use server';

type ActionState = { success: boolean; message?: string } | null;

export async function sendContactEmail(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    try {
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (
            typeof name !== 'string' ||
            typeof email !== 'string' ||
            typeof subject !== 'string' ||
            typeof message !== 'string'
        ) {
            return { success: false, message: 'Missing fields' };
        }

        const emailSubject = `Contact Form Submission: ${subject}`;

        const emailBody = {
            name,
            email,
            subject,
            message,
        };

        const { Resend } = await import('resend');
        const { EmailTemplate } = await import('@/components/email-template');

        const resend = new Resend(process.env.RESEND_API_KEY!);

        const fromEmail = process.env.EMAIL_FROM;
        const toEmailsEnv = process.env.EMAIL_TO;

        if (!fromEmail) {
            throw new Error('Missing EMAIL_FROM environment variable');
        }
        if (!toEmailsEnv) {
            throw new Error('Missing EMAIL_TO environment variable');
        }

        // Support comma separated emails in EMAIL_TO
        const toEmails = toEmailsEnv
            .split(',')
            .map(e => e.trim())
            .filter(e => e.length > 0);

        await resend.emails.send({
            from: fromEmail,
            to: toEmails,
            subject: emailSubject,
            react: EmailTemplate(emailBody),
            replyTo: email,
        });

        return { success: true, message: 'Your message has been sent.' };
    } catch (err: any) {
        return {
            success: false,
            message: err?.message || 'Failed to send message.',
        };
    }
}

export async function sendApplication(
    _prev: ActionState,
    formData: FormData
): Promise<ActionState> {
    'use server';

    try {
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const areaCode = formData.get('areaCode') || '';
        const phone = formData.get('phone');
        const dobDay = formData.get('dobDay') || '';
        const dobMonth = formData.get('dobMonth') || '';
        const dobYear = formData.get('dobYear') || '';
        const address1 = formData.get('address1') || '';
        const address2 = formData.get('address2') || '';
        const city = formData.get('city') || '';
        const state = formData.get('state') || '';
        const postal = formData.get('postal') || '';
        const hearAbout = formData.get('hearAbout') || '';
        const hearAboutOther = formData.get('hearAboutOther') || '';
        const skills = formData.get('skills') || '';
        const training = formData.get('training') || '';
        const resume = formData.get('resume');

        // Basic validation
        if (
            typeof firstName !== 'string' ||
            typeof lastName !== 'string' ||
            typeof email !== 'string' ||
            typeof phone !== 'string'
        ) {
            return { success: false, message: 'Missing required fields.' };
        }
        if (!(resume instanceof File) || resume.size === 0) {
            return {
                success: false,
                message: 'Please attach your resume.',
            };
        }

        // Prepare attachment
        const bytes = await resume.arrayBuffer();
        // Buffer works with Resend attachments; no need to base64 encode explicitly
        const content = Buffer.from(bytes);

        const { Resend } = await import('resend');
        const { CareersEmailTemplate } = await import(
            '@/components/careers-email-template'
        );

        const resend = new Resend(process.env.RESEND_API_KEY!);
        const fromEmail = process.env.EMAIL_FROM;
        const toEmailsEnv = process.env.EMAIL_TO;

        if (!fromEmail) {
            throw new Error('Missing EMAIL_FROM environment variable');
        }
        if (!toEmailsEnv) {
            throw new Error('Missing EMAIL_TO environment variable');
        }

        // Support comma separated emails in EMAIL_TO
        const toEmails = toEmailsEnv
            .split(',')
            .map(e => e.trim())
            .filter(e => e.length > 0);

        await resend.emails.send({
            from: fromEmail,
            to: toEmails,
            subject: `New Career Application: ${firstName} ${lastName}`,
            react: CareersEmailTemplate({
                firstName,
                lastName,
                email,
                phone,
                areaCode: typeof areaCode === 'string' ? areaCode : '',
                dob: {
                    day: typeof dobDay === 'string' ? dobDay : '',
                    month: typeof dobMonth === 'string' ? dobMonth : '',
                    year: typeof dobYear === 'string' ? dobYear : '',
                },
                address1: typeof address1 === 'string' ? address1 : '',
                address2: typeof address2 === 'string' ? address2 : '',
                city: typeof city === 'string' ? city : '',
                state: typeof state === 'string' ? state : '',
                postal: typeof postal === 'string' ? postal : '',
                hearAbout: typeof hearAbout === 'string' ? hearAbout : '',
                hearAboutOther:
                    typeof hearAboutOther === 'string' ? hearAboutOther : '',
                skills: typeof skills === 'string' ? skills : '',
                training: typeof training === 'string' ? training : '',
            }),
            replyTo: email,
            attachments: [
                {
                    filename: resume.name || 'resume',
                    content,
                },
            ],
        });

        return {
            success: true,
            message: 'Application submitted successfully.',
        };
    } catch (err: any) {
        return {
            success: false,
            message: err?.message ?? 'Failed to submit application.',
        };
    }
}
