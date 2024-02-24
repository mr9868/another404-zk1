export { jsLayout };
declare let jsLayout: {
    ZkappCommand: {
        type: string;
        name: string;
        docs: null;
        keys: string[];
        entries: {
            feePayer: {
                type: string;
                name: string;
                docs: null;
                keys: string[];
                entries: {
                    body: {
                        type: string;
                        name: string;
                        docs: null;
                        keys: string[];
                        entries: {
                            publicKey: {
                                type: string;
                            };
                            fee: {
                                type: string;
                            };
                            validUntil: {
                                type: string;
                                optionType: string;
                                inner: {
                                    type: string;
                                };
                            };
                            nonce: {
                                type: string;
                            };
                        };
                        docEntries: {
                            publicKey: null;
                            fee: null;
                            validUntil: null;
                            nonce: null;
                        };
                    };
                    authorization: {
                        type: string;
                    };
                };
                docEntries: {
                    body: null;
                    authorization: null;
                };
            };
            accountUpdates: {
                type: string;
                inner: {
                    type: string;
                    name: string;
                    docs: string;
                    keys: string[];
                    entries: {
                        body: {
                            type: string;
                            name: string;
                            docs: null;
                            keys: string[];
                            entries: {
                                publicKey: {
                                    type: string;
                                };
                                tokenId: {
                                    type: string;
                                };
                                update: {
                                    type: string;
                                    name: string;
                                    docs: null;
                                    keys: string[];
                                    entries: {
                                        appState: {
                                            type: string;
                                            inner: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            staticLength: number;
                                        };
                                        delegate: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                        verificationKey: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    data: {
                                                        type: string;
                                                    };
                                                    hash: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    data: null;
                                                    hash: null;
                                                };
                                            };
                                        };
                                        permissions: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    editState: {
                                                        type: string;
                                                    };
                                                    send: {
                                                        type: string;
                                                    };
                                                    receive: {
                                                        type: string;
                                                    };
                                                    setDelegate: {
                                                        type: string;
                                                    };
                                                    setPermissions: {
                                                        type: string;
                                                    };
                                                    setVerificationKey: {
                                                        type: string;
                                                    };
                                                    setZkappUri: {
                                                        type: string;
                                                    };
                                                    editSequenceState: {
                                                        type: string;
                                                    };
                                                    setTokenSymbol: {
                                                        type: string;
                                                    };
                                                    incrementNonce: {
                                                        type: string;
                                                    };
                                                    setVotingFor: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    editState: null;
                                                    send: null;
                                                    receive: null;
                                                    setDelegate: null;
                                                    setPermissions: null;
                                                    setVerificationKey: null;
                                                    setZkappUri: null;
                                                    editSequenceState: null;
                                                    setTokenSymbol: null;
                                                    incrementNonce: null;
                                                    setVotingFor: null;
                                                };
                                            };
                                        };
                                        zkappUri: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                checkedType: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        data: {
                                                            type: string;
                                                        };
                                                        hash: {
                                                            type: string;
                                                        };
                                                    };
                                                    docEntries: {
                                                        data: null;
                                                        hash: null;
                                                    };
                                                };
                                                checkedTypeName: string;
                                            };
                                        };
                                        tokenSymbol: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                checkedType: {
                                                    type: string;
                                                };
                                                checkedTypeName: string;
                                            };
                                        };
                                        timing: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    initialMinimumBalance: {
                                                        type: string;
                                                    };
                                                    cliffTime: {
                                                        type: string;
                                                    };
                                                    cliffAmount: {
                                                        type: string;
                                                    };
                                                    vestingPeriod: {
                                                        type: string;
                                                    };
                                                    vestingIncrement: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    initialMinimumBalance: null;
                                                    cliffTime: null;
                                                    cliffAmount: null;
                                                    vestingPeriod: null;
                                                    vestingIncrement: null;
                                                };
                                            };
                                        };
                                        votingFor: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                    };
                                    docEntries: {
                                        appState: null;
                                        delegate: null;
                                        verificationKey: null;
                                        permissions: null;
                                        zkappUri: null;
                                        tokenSymbol: null;
                                        timing: null;
                                        votingFor: null;
                                    };
                                };
                                balanceChange: {
                                    type: string;
                                    name: string;
                                    docs: null;
                                    keys: string[];
                                    entries: {
                                        magnitude: {
                                            type: string;
                                        };
                                        sgn: {
                                            type: string;
                                        };
                                    };
                                    docEntries: {
                                        magnitude: null;
                                        sgn: null;
                                    };
                                };
                                incrementNonce: {
                                    type: string;
                                };
                                events: {
                                    type: string;
                                    inner: {
                                        type: string;
                                        inner: {
                                            type: string;
                                        };
                                        staticLength: null;
                                    };
                                    staticLength: null;
                                    checkedType: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            data: {
                                                type: string;
                                                inner: {
                                                    type: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                    staticLength: null;
                                                };
                                                staticLength: null;
                                            };
                                            hash: {
                                                type: string;
                                            };
                                        };
                                        docEntries: {
                                            data: null;
                                            hash: null;
                                        };
                                    };
                                    checkedTypeName: string;
                                };
                                sequenceEvents: {
                                    type: string;
                                    inner: {
                                        type: string;
                                        inner: {
                                            type: string;
                                        };
                                        staticLength: null;
                                    };
                                    staticLength: null;
                                    checkedType: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            data: {
                                                type: string;
                                                inner: {
                                                    type: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                    staticLength: null;
                                                };
                                                staticLength: null;
                                            };
                                            hash: {
                                                type: string;
                                            };
                                        };
                                        docEntries: {
                                            data: null;
                                            hash: null;
                                        };
                                    };
                                    checkedTypeName: string;
                                };
                                callData: {
                                    type: string;
                                };
                                callDepth: {
                                    type: string;
                                };
                                preconditions: {
                                    type: string;
                                    name: string;
                                    docs: null;
                                    keys: string[];
                                    entries: {
                                        network: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                snarkedLedgerHash: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                timestamp: {
                                                    type: string;
                                                    optionType: string;
                                                    rangeMin: string;
                                                    rangeMax: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                                blockchainLength: {
                                                    type: string;
                                                    optionType: string;
                                                    rangeMin: string;
                                                    rangeMax: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                                minWindowDensity: {
                                                    type: string;
                                                    optionType: string;
                                                    rangeMin: string;
                                                    rangeMax: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                                totalCurrency: {
                                                    type: string;
                                                    optionType: string;
                                                    rangeMin: string;
                                                    rangeMax: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                                globalSlotSinceHardFork: {
                                                    type: string;
                                                    optionType: string;
                                                    rangeMin: string;
                                                    rangeMax: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                                globalSlotSinceGenesis: {
                                                    type: string;
                                                    optionType: string;
                                                    rangeMin: string;
                                                    rangeMax: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                                stakingEpochData: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        ledger: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                hash: {
                                                                    type: string;
                                                                    optionType: string;
                                                                    inner: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                totalCurrency: {
                                                                    type: string;
                                                                    optionType: string;
                                                                    rangeMin: string;
                                                                    rangeMax: string;
                                                                    inner: {
                                                                        type: string;
                                                                        name: string;
                                                                        docs: null;
                                                                        keys: string[];
                                                                        entries: {
                                                                            lower: {
                                                                                type: string;
                                                                            };
                                                                            upper: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        docEntries: {
                                                                            lower: null;
                                                                            upper: null;
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            docEntries: {
                                                                hash: null;
                                                                totalCurrency: null;
                                                            };
                                                        };
                                                        seed: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        startCheckpoint: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        lockCheckpoint: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        epochLength: {
                                                            type: string;
                                                            optionType: string;
                                                            rangeMin: string;
                                                            rangeMax: string;
                                                            inner: {
                                                                type: string;
                                                                name: string;
                                                                docs: null;
                                                                keys: string[];
                                                                entries: {
                                                                    lower: {
                                                                        type: string;
                                                                    };
                                                                    upper: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                docEntries: {
                                                                    lower: null;
                                                                    upper: null;
                                                                };
                                                            };
                                                        };
                                                    };
                                                    docEntries: {
                                                        ledger: null;
                                                        seed: null;
                                                        startCheckpoint: null;
                                                        lockCheckpoint: null;
                                                        epochLength: null;
                                                    };
                                                };
                                                nextEpochData: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        ledger: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                hash: {
                                                                    type: string;
                                                                    optionType: string;
                                                                    inner: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                totalCurrency: {
                                                                    type: string;
                                                                    optionType: string;
                                                                    rangeMin: string;
                                                                    rangeMax: string;
                                                                    inner: {
                                                                        type: string;
                                                                        name: string;
                                                                        docs: null;
                                                                        keys: string[];
                                                                        entries: {
                                                                            lower: {
                                                                                type: string;
                                                                            };
                                                                            upper: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        docEntries: {
                                                                            lower: null;
                                                                            upper: null;
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            docEntries: {
                                                                hash: null;
                                                                totalCurrency: null;
                                                            };
                                                        };
                                                        seed: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        startCheckpoint: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        lockCheckpoint: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        epochLength: {
                                                            type: string;
                                                            optionType: string;
                                                            rangeMin: string;
                                                            rangeMax: string;
                                                            inner: {
                                                                type: string;
                                                                name: string;
                                                                docs: null;
                                                                keys: string[];
                                                                entries: {
                                                                    lower: {
                                                                        type: string;
                                                                    };
                                                                    upper: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                docEntries: {
                                                                    lower: null;
                                                                    upper: null;
                                                                };
                                                            };
                                                        };
                                                    };
                                                    docEntries: {
                                                        ledger: null;
                                                        seed: null;
                                                        startCheckpoint: null;
                                                        lockCheckpoint: null;
                                                        epochLength: null;
                                                    };
                                                };
                                            };
                                            docEntries: {
                                                snarkedLedgerHash: null;
                                                timestamp: null;
                                                blockchainLength: null;
                                                minWindowDensity: null;
                                                totalCurrency: null;
                                                globalSlotSinceHardFork: null;
                                                globalSlotSinceGenesis: null;
                                                stakingEpochData: null;
                                                nextEpochData: null;
                                            };
                                        };
                                        account: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                balance: {
                                                    type: string;
                                                    optionType: string;
                                                    rangeMin: string;
                                                    rangeMax: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                                nonce: {
                                                    type: string;
                                                    optionType: string;
                                                    rangeMin: string;
                                                    rangeMax: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                                receiptChainHash: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                delegate: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                state: {
                                                    type: string;
                                                    inner: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                    staticLength: number;
                                                };
                                                sequenceState: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                        checkedType: {
                                                            type: string;
                                                        };
                                                        checkedTypeName: string;
                                                    };
                                                };
                                                provedState: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                isNew: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                            docEntries: {
                                                balance: null;
                                                nonce: null;
                                                receiptChainHash: null;
                                                delegate: null;
                                                state: null;
                                                sequenceState: null;
                                                provedState: null;
                                                isNew: null;
                                            };
                                        };
                                    };
                                    docEntries: {
                                        network: null;
                                        account: null;
                                    };
                                };
                                useFullCommitment: {
                                    type: string;
                                };
                                caller: {
                                    type: string;
                                };
                                authorizationKind: {
                                    type: string;
                                };
                            };
                            docEntries: {
                                publicKey: null;
                                tokenId: null;
                                update: null;
                                balanceChange: null;
                                incrementNonce: null;
                                events: null;
                                sequenceEvents: null;
                                callData: null;
                                callDepth: null;
                                preconditions: null;
                                useFullCommitment: null;
                                caller: null;
                                authorizationKind: null;
                            };
                        };
                        authorization: {
                            type: string;
                            name: string;
                            docs: null;
                            keys: string[];
                            entries: {
                                proof: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                    };
                                };
                                signature: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                    };
                                };
                            };
                            docEntries: {
                                proof: null;
                                signature: null;
                            };
                        };
                    };
                    docEntries: {
                        body: null;
                        authorization: null;
                    };
                };
                staticLength: null;
            };
            memo: {
                type: string;
            };
        };
        docEntries: {
            feePayer: null;
            accountUpdates: null;
            memo: null;
        };
    };
    AccountUpdate: {
        type: string;
        name: string;
        docs: string;
        keys: string[];
        entries: {
            body: {
                type: string;
                name: string;
                docs: null;
                keys: string[];
                entries: {
                    publicKey: {
                        type: string;
                    };
                    tokenId: {
                        type: string;
                    };
                    update: {
                        type: string;
                        name: string;
                        docs: null;
                        keys: string[];
                        entries: {
                            appState: {
                                type: string;
                                inner: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                    };
                                };
                                staticLength: number;
                            };
                            delegate: {
                                type: string;
                                optionType: string;
                                inner: {
                                    type: string;
                                };
                            };
                            verificationKey: {
                                type: string;
                                optionType: string;
                                inner: {
                                    type: string;
                                    name: string;
                                    docs: null;
                                    keys: string[];
                                    entries: {
                                        data: {
                                            type: string;
                                        };
                                        hash: {
                                            type: string;
                                        };
                                    };
                                    docEntries: {
                                        data: null;
                                        hash: null;
                                    };
                                };
                            };
                            permissions: {
                                type: string;
                                optionType: string;
                                inner: {
                                    type: string;
                                    name: string;
                                    docs: null;
                                    keys: string[];
                                    entries: {
                                        editState: {
                                            type: string;
                                        };
                                        send: {
                                            type: string;
                                        };
                                        receive: {
                                            type: string;
                                        };
                                        setDelegate: {
                                            type: string;
                                        };
                                        setPermissions: {
                                            type: string;
                                        };
                                        setVerificationKey: {
                                            type: string;
                                        };
                                        setZkappUri: {
                                            type: string;
                                        };
                                        editSequenceState: {
                                            type: string;
                                        };
                                        setTokenSymbol: {
                                            type: string;
                                        };
                                        incrementNonce: {
                                            type: string;
                                        };
                                        setVotingFor: {
                                            type: string;
                                        };
                                    };
                                    docEntries: {
                                        editState: null;
                                        send: null;
                                        receive: null;
                                        setDelegate: null;
                                        setPermissions: null;
                                        setVerificationKey: null;
                                        setZkappUri: null;
                                        editSequenceState: null;
                                        setTokenSymbol: null;
                                        incrementNonce: null;
                                        setVotingFor: null;
                                    };
                                };
                            };
                            zkappUri: {
                                type: string;
                                optionType: string;
                                inner: {
                                    type: string;
                                    checkedType: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            data: {
                                                type: string;
                                            };
                                            hash: {
                                                type: string;
                                            };
                                        };
                                        docEntries: {
                                            data: null;
                                            hash: null;
                                        };
                                    };
                                    checkedTypeName: string;
                                };
                            };
                            tokenSymbol: {
                                type: string;
                                optionType: string;
                                inner: {
                                    type: string;
                                    checkedType: {
                                        type: string;
                                    };
                                    checkedTypeName: string;
                                };
                            };
                            timing: {
                                type: string;
                                optionType: string;
                                inner: {
                                    type: string;
                                    name: string;
                                    docs: null;
                                    keys: string[];
                                    entries: {
                                        initialMinimumBalance: {
                                            type: string;
                                        };
                                        cliffTime: {
                                            type: string;
                                        };
                                        cliffAmount: {
                                            type: string;
                                        };
                                        vestingPeriod: {
                                            type: string;
                                        };
                                        vestingIncrement: {
                                            type: string;
                                        };
                                    };
                                    docEntries: {
                                        initialMinimumBalance: null;
                                        cliffTime: null;
                                        cliffAmount: null;
                                        vestingPeriod: null;
                                        vestingIncrement: null;
                                    };
                                };
                            };
                            votingFor: {
                                type: string;
                                optionType: string;
                                inner: {
                                    type: string;
                                };
                            };
                        };
                        docEntries: {
                            appState: null;
                            delegate: null;
                            verificationKey: null;
                            permissions: null;
                            zkappUri: null;
                            tokenSymbol: null;
                            timing: null;
                            votingFor: null;
                        };
                    };
                    balanceChange: {
                        type: string;
                        name: string;
                        docs: null;
                        keys: string[];
                        entries: {
                            magnitude: {
                                type: string;
                            };
                            sgn: {
                                type: string;
                            };
                        };
                        docEntries: {
                            magnitude: null;
                            sgn: null;
                        };
                    };
                    incrementNonce: {
                        type: string;
                    };
                    events: {
                        type: string;
                        inner: {
                            type: string;
                            inner: {
                                type: string;
                            };
                            staticLength: null;
                        };
                        staticLength: null;
                        checkedType: {
                            type: string;
                            name: string;
                            docs: null;
                            keys: string[];
                            entries: {
                                data: {
                                    type: string;
                                    inner: {
                                        type: string;
                                        inner: {
                                            type: string;
                                        };
                                        staticLength: null;
                                    };
                                    staticLength: null;
                                };
                                hash: {
                                    type: string;
                                };
                            };
                            docEntries: {
                                data: null;
                                hash: null;
                            };
                        };
                        checkedTypeName: string;
                    };
                    sequenceEvents: {
                        type: string;
                        inner: {
                            type: string;
                            inner: {
                                type: string;
                            };
                            staticLength: null;
                        };
                        staticLength: null;
                        checkedType: {
                            type: string;
                            name: string;
                            docs: null;
                            keys: string[];
                            entries: {
                                data: {
                                    type: string;
                                    inner: {
                                        type: string;
                                        inner: {
                                            type: string;
                                        };
                                        staticLength: null;
                                    };
                                    staticLength: null;
                                };
                                hash: {
                                    type: string;
                                };
                            };
                            docEntries: {
                                data: null;
                                hash: null;
                            };
                        };
                        checkedTypeName: string;
                    };
                    callData: {
                        type: string;
                    };
                    callDepth: {
                        type: string;
                    };
                    preconditions: {
                        type: string;
                        name: string;
                        docs: null;
                        keys: string[];
                        entries: {
                            network: {
                                type: string;
                                name: string;
                                docs: null;
                                keys: string[];
                                entries: {
                                    snarkedLedgerHash: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                        };
                                    };
                                    timestamp: {
                                        type: string;
                                        optionType: string;
                                        rangeMin: string;
                                        rangeMax: string;
                                        inner: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                lower: {
                                                    type: string;
                                                };
                                                upper: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                lower: null;
                                                upper: null;
                                            };
                                        };
                                    };
                                    blockchainLength: {
                                        type: string;
                                        optionType: string;
                                        rangeMin: string;
                                        rangeMax: string;
                                        inner: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                lower: {
                                                    type: string;
                                                };
                                                upper: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                lower: null;
                                                upper: null;
                                            };
                                        };
                                    };
                                    minWindowDensity: {
                                        type: string;
                                        optionType: string;
                                        rangeMin: string;
                                        rangeMax: string;
                                        inner: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                lower: {
                                                    type: string;
                                                };
                                                upper: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                lower: null;
                                                upper: null;
                                            };
                                        };
                                    };
                                    totalCurrency: {
                                        type: string;
                                        optionType: string;
                                        rangeMin: string;
                                        rangeMax: string;
                                        inner: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                lower: {
                                                    type: string;
                                                };
                                                upper: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                lower: null;
                                                upper: null;
                                            };
                                        };
                                    };
                                    globalSlotSinceHardFork: {
                                        type: string;
                                        optionType: string;
                                        rangeMin: string;
                                        rangeMax: string;
                                        inner: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                lower: {
                                                    type: string;
                                                };
                                                upper: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                lower: null;
                                                upper: null;
                                            };
                                        };
                                    };
                                    globalSlotSinceGenesis: {
                                        type: string;
                                        optionType: string;
                                        rangeMin: string;
                                        rangeMax: string;
                                        inner: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                lower: {
                                                    type: string;
                                                };
                                                upper: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                lower: null;
                                                upper: null;
                                            };
                                        };
                                    };
                                    stakingEpochData: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            ledger: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    hash: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                    totalCurrency: {
                                                        type: string;
                                                        optionType: string;
                                                        rangeMin: string;
                                                        rangeMax: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                };
                                                docEntries: {
                                                    hash: null;
                                                    totalCurrency: null;
                                                };
                                            };
                                            seed: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            startCheckpoint: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            lockCheckpoint: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            epochLength: {
                                                type: string;
                                                optionType: string;
                                                rangeMin: string;
                                                rangeMax: string;
                                                inner: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        lower: {
                                                            type: string;
                                                        };
                                                        upper: {
                                                            type: string;
                                                        };
                                                    };
                                                    docEntries: {
                                                        lower: null;
                                                        upper: null;
                                                    };
                                                };
                                            };
                                        };
                                        docEntries: {
                                            ledger: null;
                                            seed: null;
                                            startCheckpoint: null;
                                            lockCheckpoint: null;
                                            epochLength: null;
                                        };
                                    };
                                    nextEpochData: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            ledger: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    hash: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                    totalCurrency: {
                                                        type: string;
                                                        optionType: string;
                                                        rangeMin: string;
                                                        rangeMax: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                };
                                                docEntries: {
                                                    hash: null;
                                                    totalCurrency: null;
                                                };
                                            };
                                            seed: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            startCheckpoint: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            lockCheckpoint: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            epochLength: {
                                                type: string;
                                                optionType: string;
                                                rangeMin: string;
                                                rangeMax: string;
                                                inner: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        lower: {
                                                            type: string;
                                                        };
                                                        upper: {
                                                            type: string;
                                                        };
                                                    };
                                                    docEntries: {
                                                        lower: null;
                                                        upper: null;
                                                    };
                                                };
                                            };
                                        };
                                        docEntries: {
                                            ledger: null;
                                            seed: null;
                                            startCheckpoint: null;
                                            lockCheckpoint: null;
                                            epochLength: null;
                                        };
                                    };
                                };
                                docEntries: {
                                    snarkedLedgerHash: null;
                                    timestamp: null;
                                    blockchainLength: null;
                                    minWindowDensity: null;
                                    totalCurrency: null;
                                    globalSlotSinceHardFork: null;
                                    globalSlotSinceGenesis: null;
                                    stakingEpochData: null;
                                    nextEpochData: null;
                                };
                            };
                            account: {
                                type: string;
                                name: string;
                                docs: null;
                                keys: string[];
                                entries: {
                                    balance: {
                                        type: string;
                                        optionType: string;
                                        rangeMin: string;
                                        rangeMax: string;
                                        inner: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                lower: {
                                                    type: string;
                                                };
                                                upper: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                lower: null;
                                                upper: null;
                                            };
                                        };
                                    };
                                    nonce: {
                                        type: string;
                                        optionType: string;
                                        rangeMin: string;
                                        rangeMax: string;
                                        inner: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                lower: {
                                                    type: string;
                                                };
                                                upper: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                lower: null;
                                                upper: null;
                                            };
                                        };
                                    };
                                    receiptChainHash: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                        };
                                    };
                                    delegate: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                        };
                                    };
                                    state: {
                                        type: string;
                                        inner: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                        staticLength: number;
                                    };
                                    sequenceState: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                            checkedType: {
                                                type: string;
                                            };
                                            checkedTypeName: string;
                                        };
                                    };
                                    provedState: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                        };
                                    };
                                    isNew: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                        };
                                    };
                                };
                                docEntries: {
                                    balance: null;
                                    nonce: null;
                                    receiptChainHash: null;
                                    delegate: null;
                                    state: null;
                                    sequenceState: null;
                                    provedState: null;
                                    isNew: null;
                                };
                            };
                        };
                        docEntries: {
                            network: null;
                            account: null;
                        };
                    };
                    useFullCommitment: {
                        type: string;
                    };
                    caller: {
                        type: string;
                    };
                    authorizationKind: {
                        type: string;
                    };
                };
                docEntries: {
                    publicKey: null;
                    tokenId: null;
                    update: null;
                    balanceChange: null;
                    incrementNonce: null;
                    events: null;
                    sequenceEvents: null;
                    callData: null;
                    callDepth: null;
                    preconditions: null;
                    useFullCommitment: null;
                    caller: null;
                    authorizationKind: null;
                };
            };
            authorization: {
                type: string;
                name: string;
                docs: null;
                keys: string[];
                entries: {
                    proof: {
                        type: string;
                        optionType: string;
                        inner: {
                            type: string;
                        };
                    };
                    signature: {
                        type: string;
                        optionType: string;
                        inner: {
                            type: string;
                        };
                    };
                };
                docEntries: {
                    proof: null;
                    signature: null;
                };
            };
        };
        docEntries: {
            body: null;
            authorization: null;
        };
    };
};
