export default function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center text-center text-white">
            {/**  ANIMACIÓN */}
            <div
                id="past"
                className="p-6 w-5/6 rounded-lg shadow-2xl bg-purple-950"
            >
                <h1 className="text-3xl font-spacemono mb-4">PAST</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id
                    habitasse ut, mattis pharetra vestibulum curabitur et
                    convallis torquent molestie. Nisl pulvinar vulputate erat
                    porta ridiculus curabitur faucibus, bibendum risus congue
                    auctor taciti suscipit urna hendrerit, id nunc conubia
                    natoque dapibus fringilla. Vitae etiam mus sapien nullam
                    augue, sagittis sodales placerat ut, ultricies aliquet at
                    cursus.
                </p>
            </div>
            <div
                id="present"
                className="p-6 w-5/6 rounded-lg shadow-2xl bg-purple-950"
            >
                <h1 className="text-3xl font-spacemono mb-4">PRESENT</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id
                    habitasse ut, mattis pharetra vestibulum curabitur et
                    convallis torquent molestie. Nisl pulvinar vulputate erat
                    porta ridiculus curabitur faucibus, bibendum risus congue
                    auctor taciti suscipit urna hendrerit, id nunc conubia
                    natoque dapibus fringilla. Vitae etiam mus sapien nullam
                    augue, sagittis sodales placerat ut, ultricies aliquet at
                    cursus.
                </p>
            </div>
            <div
                id="future"
                className="md:col-span-2 lg:col-span-1 p-6 w-5/6 md:w-2/5 lg:w-5/6 rounded-lg shadow-2xl bg-purple-950"
            >
                <h1 className="text-3xl font-spacemono mb-4">FUTURE</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id
                    habitasse ut, mattis pharetra vestibulum curabitur et
                    convallis torquent molestie. Nisl pulvinar vulputate erat
                    porta ridiculus curabitur faucibus, bibendum risus congue
                    auctor taciti suscipit urna hendrerit, id nunc conubia
                    natoque dapibus fringilla. Vitae etiam mus sapien nullam
                    augue, sagittis sodales placerat ut, ultricies aliquet at
                    cursus.
                </p>
            </div>
        </div>
    );
}
