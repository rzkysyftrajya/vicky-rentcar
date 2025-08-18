
"use client";

import React, { Suspense } from 'react';
import FleetPage from '../fleet/page';


export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FleetPage />
        </Suspense>
    )
}

