export const MAX_COUNT = 9;
export const MAX_COUNT_STANDBY = 3;

export default function getMaxCount({
    passengers: { adults, children, infants },
    isStandby = false,
}) {
    const total = isStandby ? MAX_COUNT_STANDBY : MAX_COUNT;
    return {
        adults: Math.max(0, total - children - infants),
        children: Math.max(0, total - adults - infants),
        infants: Math.max(0, Math.min(adults, total - children - adults)),
    };
}
