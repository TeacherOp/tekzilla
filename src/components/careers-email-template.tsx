type CareersEmailProps = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    areaCode?: string;
    dob?: { day?: string; month?: string; year?: string };
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    postal?: string;
    hearAbout?: string;
    hearAboutOther?: string;
    skills?: string;
    training?: string;
};

export function CareersEmailTemplate(props: CareersEmailProps) {
    const {
        firstName,
        lastName,
        email,
        phone,
        areaCode,
        dob,
        address1,
        address2,
        city,
        state,
        postal,
        hearAbout,
        hearAboutOther,
        skills,
        training,
    } = props;

    const fullName = `${firstName} ${lastName}`.trim();

    return (
        <div
            style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#111',
                lineHeight: 1.5,
            }}
        >
            {/* Preheader (hidden in most clients but useful) */}
            <div style={{ display: 'none', maxHeight: 0, overflow: 'hidden' }}>
                New career application from {fullName}
            </div>

            <h2 style={{ margin: '0 0 12px', fontSize: 20 }}>
                New Career Application
            </h2>
            <p style={{ margin: '0 0 16px' }}>
                You have received a new application from{' '}
                <strong>{fullName}</strong>.
            </p>

            <table
                role='presentation'
                cellPadding={0}
                cellSpacing={0}
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    border: '1px solid #e5e7eb',
                    background: '#fafafa',
                }}
            >
                <tbody>
                    <Row label='Full Name' value={fullName} />
                    <Row label='Email' value={email} />
                    <Row
                        label='Phone'
                        value={`${areaCode ? `(${areaCode}) ` : ''}${phone}`}
                    />
                    <Row
                        label='Date of Birth'
                        value={[dob?.day, dob?.month, dob?.year]
                            .filter(Boolean)
                            .join(' / ')}
                    />
                    <Row
                        label='Address'
                        value={[address1, address2, city, state, postal]
                            .filter(Boolean)
                            .join(', ')}
                    />
                    <Row
                        label='Heard About Us'
                        value={[hearAbout, hearAboutOther]
                            .filter(Boolean)
                            .join(' - ')}
                    />
                    <Row label='Skills' value={skills} multi />
                    <Row
                        label='Training/Certifications'
                        value={training}
                        multi
                    />
                </tbody>
            </table>

            <p style={{ margin: '16px 0 0' }}>
                The applicant&apos;s resume is attached to this email.
            </p>
        </div>
    );
}

function Row({
    label,
    value,
    multi = false,
}: {
    label: string;
    value?: string;
    multi?: boolean;
}) {
    return (
        <tr>
            <td
                style={{
                    width: 180,
                    verticalAlign: 'top',
                    padding: '10px 12px',
                    background: '#f3f4f6',
                    borderBottom: '1px solid #e5e7eb',
                    fontWeight: 600,
                    fontSize: 14,
                }}
            >
                {label}
            </td>
            <td
                style={{
                    verticalAlign: 'top',
                    padding: '10px 12px',
                    borderBottom: '1px solid #e5e7eb',
                    whiteSpace: multi ? 'pre-wrap' : 'normal',
                }}
            >
                {value || '-'}
            </td>
        </tr>
    );
}
