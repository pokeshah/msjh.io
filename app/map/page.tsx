import Image from 'next/image';

export default function map() {
    return (
        <Image unoptimized src="/campus-map.jpg" alt="map" fill objectFit="contain"/>
    );
}
