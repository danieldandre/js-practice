"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packages = [
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
function filterPackages(packages, filterFn) {
    return packages.filter(filterFn);
}
function isDelivered(pkg) {
    return pkg.isDelivered;
}
function isHeavy(thresholdKg) {
    return pkg => pkg.weightKg >= thresholdKg;
}
function goingTo(city) {
    return pkg => pkg.destination === city;
}
const summaryPrinter = pkg => `${pkg.id} to ${pkg.recipient} - ${pkg.destination}`;
const fullDetailsPrinter = pkg => {
    const status = pkg.isDelivered ? "Delivered" : "In Transit";
    return `Package ID:   ${pkg.id}
            To: ${pkg.recipient}
            Weight: ${pkg.weightKg}
            Status: ${status}`;
};
function printPackages(packages, printer) {
    console.log(packages.map(printer));
}
const TrackedPackages = [
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
function hasCheckpoint(pkg, checkpoint) {
    return pkg.checkpoints.includes(checkpoint);
}
function findPackagesAtCheckpoint(packages, checkpoint) {
    return packages.filter(pkg => hasCheckpoint(pkg, checkpoint));
}
const pkg_checkpoint = hasCheckpoint(TrackedPackages[0], "Delivered");
const find_pkg_at_checkpoint = findPackagesAtCheckpoint(TrackedPackages, "Local depot");
console.log(pkg_checkpoint);
console.log(find_pkg_at_checkpoint);
