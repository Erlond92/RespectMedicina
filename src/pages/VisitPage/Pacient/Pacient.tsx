interface pacientProps {
    name: string,
    phone: string,
    doctor: string,
    doctor_pro: string,
    comm: string,
}

export const Pacient: React.FC<pacientProps> = () => {
    return (
        <tr>
            <td></td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    );
};