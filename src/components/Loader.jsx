import 'ldrs/dotPulse'

export default function Loader() {
    return (
        <div className="text-center pt-4 fs-4 position-fixed top-0 left-0 w-100 h-100 bg-light d-flex justify-content-center align-items-center">
            <span>Caricamento in corso</span>
            <span className='ps-4'><l-dot-pulse size="43" speed="1.3" color="black"></l-dot-pulse></span>
        </div>
    )
}