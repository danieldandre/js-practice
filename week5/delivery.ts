interface Package {
    id: string;
    sender: string;
    recipient: string;
    weightKg: number;
    destination: string;
    isDelivered: boolean;
    deliveryDate?: Date;
}

type PackageFilter = (pkg: Package) => boolean;

const packages: Package[] = [
    {
        id: "PKG-001",
        sender: "Alice Johnson",
        recipient: "Bob Smith",
        weightKg: 2.4,
        destination: "New York",
        isDelivered: true,
        deliveryDate: new Date("2025-08-01"),
    },
    {
        id: "PKG-002",
        sender: "Charlie Brown",
        recipient: "Diana Prince",
        weightKg: 5.1,
        destination: "San Francisco",
        isDelivered: false,
    },
    {
        id: "PKG-003",
        sender: "Evan Wright",
        recipient: "Fiona Gallagher",
        weightKg: 0.9,
        destination: "Chicago",
        isDelivered: true,
        deliveryDate: new Date("2025-07-28"),
    },
    {
        id: "PKG-004",
        sender: "George Lucas",
        recipient: "Hannah Lee",
        weightKg: 10.7,
        destination: "Boston",
        isDelivered: false,
    },
    {
        id: "PKG-005",
        sender: "Iris West",
        recipient: "Jack Reacher",
        weightKg: 3.3,
        destination: "Miami",
        isDelivered: true,
        deliveryDate: new Date("2025-08-10"),
    },
    {
        id: "PKG-006",
        sender: "Karen Page",
        recipient: "Luke Cage",
        weightKg: 7.6,
        destination: "Houston",
        isDelivered: false,
    },
    {
        id: "PKG-007",
        sender: "Mia Wong",
        recipient: "Noah Patel",
        weightKg: 1.5,
        destination: "Los Angeles",
        isDelivered: true,
        deliveryDate: new Date("2025-08-15"),
    },
    {
        id: "PKG-008",
        sender: "Oscar Diaz",
        recipient: "Pam Beesly",
        weightKg: 12.2,
        destination: "Berlin",
        isDelivered: false,
    },
];

function filterPackages(packages: Package[], filterFn: PackageFilter): Package[] {
    return packages.filter(filterFn);
}

function isDelivered(pkg: Package): boolean {
    return pkg.isDelivered;
}

function isHeavy(thresholdKg: number): PackageFilter {
    return pkg => pkg.weightKg >= thresholdKg;
}

function goingTo(city: string): PackageFilter {
    return pkg => pkg.destination === city;
}

// const deliveredPackages = filterPackages(packages, isDelivered);
// const heavyPackages = filterPackages(packages, isHeavy(10));
// const berlinPackages = filterPackages(packages, goingTo("Berlin"));
// console.log("Packages delivered:", deliveredPackages);
// console.log("Packages heavier than 10:", heavyPackages);
// console.log("Packages going to Berlin:", berlinPackages);

//-----3.3-----//
type DeliveryPrinter = (pkg: Package) => string;

const summaryPrinter: DeliveryPrinter = pkg => `${pkg.id} to ${pkg.recipient} - ${pkg.destination}`;
const fullDetailsPrinter: DeliveryPrinter = pkg => {
    const status: string = pkg.isDelivered ? "Delivered" : "In Transit";
    return `Package ID:   ${pkg.id}
            To: ${pkg.recipient}
            Weight: ${pkg.weightKg}
            Status: ${status}`;
};

function printPackages(packages: Package[], printer: DeliveryPrinter): void {
    console.log(packages.map(printer));
}

// function printSummary(packages:Package[]) {
//     printPackages(packages, summaryPrinter);
// }

// function printFullDetails(packages:Package[]) {
//     printPackages(packages, fullDetailsPrinter);
// }

// printSummary(packages);
// printFullDetails(packages);

// printPackages(packages, summaryPrinter);
// printPackages(packages, fullDetailsPrinter);

//-----3.4-----//
interface TrackedPackage extends Package {
    trackingNumber: string;
    checkpoints: string[];
}

const TrackedPackages: TrackedPackage[] = [
    {
        id: "TPKG-101",
        trackingNumber: "FDX-9A2C-001",
        sender: "Alice Johnson",
        recipient: "Bob Smith",
        weightKg: 2.1,
        destination: "New York",
        isDelivered: true,
        deliveryDate: new Date("2025-08-03"),
        checkpoints: ["Warehouse", "On the Way", "Local depot", "Out for Delivery", "Delivered"]
    },
    {
        id: "TPKG-102",
        trackingNumber: "DHL-7B8K-442",
        sender: "Charlie Brown",
        recipient: "Diana Prince",
        weightKg: 6.5,
        destination: "Berlin",
        isDelivered: false,
        checkpoints: ["Warehouse", "International Hub", "Customs", "On the Way"]
    },
    {
        id: "TPKG-103",
        trackingNumber: "UPS-5M3T-778",
        sender: "Evan Wright",
        recipient: "Fiona Gallagher",
        weightKg: 1.8,
        destination: "Chicago",
        isDelivered: false,
        checkpoints: ["Warehouse", "On the Way", "Local depot"]
    }
];

function hasCheckpoint(pkg: TrackedPackage, checkpoint: string): boolean {
    return pkg.checkpoints.includes(checkpoint);
}

function findPackagesAtCheckpoint(packages: TrackedPackage[], checkpoint: string): TrackedPackage[] {
    return packages.filter(pkg => hasCheckpoint(pkg, checkpoint));
}

const pkg_checkpoint = hasCheckpoint(TrackedPackages[0], "Delivered");
const find_pkg_at_checkpoint = findPackagesAtCheckpoint(TrackedPackages, "Local depot");
console.log(pkg_checkpoint);
console.log(find_pkg_at_checkpoint);