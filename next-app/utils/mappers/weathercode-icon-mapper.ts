import { Icons } from '@/components/icons/icons';
import React from 'react';

type IconComponent = (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;

interface WeathercodeGroup {
    codes: number[];
    icon: IconComponent;
}

const weathercodeGroups: WeathercodeGroup[] = [
    { codes: [0], icon: Icons.sun },
    { codes: [1, 2, 3], icon: Icons.cloud },
    { codes: [45, 48], icon: Icons.fog },
    { codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], icon: Icons.rain },
    { codes: [71, 73, 75, 77, 85, 86], icon: Icons.snow },
    { codes: [95, 96, 99], icon: Icons.thunder }
];

const mapWeathercodeToIcon = (
    weathercode: number | undefined,
    props: React.SVGProps<SVGSVGElement> = {}
): React.ReactNode => {
    if (weathercode === undefined) {
        return null;
    }

    const group = weathercodeGroups.find(group => group.codes.includes(weathercode));
    return group ? React.createElement(group.icon, {...props}) : React.createElement(Icons.cloud, {...props}) ;
}

export { mapWeathercodeToIcon }