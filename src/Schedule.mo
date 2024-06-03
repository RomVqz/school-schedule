import Prim "mo:base/Prim";

actor class Schedule() {
    stable var schedules : [ScheduleEntry] = [];

    type ScheduleEntry = {
        id : Nat;
        course : Text;
        day : Text;
        startTime : Text;
        endTime : Text;
    };

    public func addEntry(entry: ScheduleEntry): async () {
        schedules := Array.append(schedules, [entry]);
    };

    public func getEntry(id: Nat): async ?ScheduleEntry {
        for (entry in schedules.vals()) {
            if (entry.id == id) {
                return ?entry;
            }
        };
        return null;
    };

    public func updateEntry(updatedEntry: ScheduleEntry): async ?Text {
        for (entry in schedules.vals()) {
            if (entry.id == updatedEntry.id) {
                entry.course := updatedEntry.course;
                entry.day := updatedEntry.day;
                entry.startTime := updatedEntry.startTime;
                entry.endTime := updatedEntry.endTime;
                return ?("Entry updated successfully.");
            }
        };
        return ?("Entry not found.");
    };

    public func deleteEntry(id: Nat): async ?Text {
        var newSchedules : [ScheduleEntry] = [];
        var found = false;

        for (entry in schedules.vals()) {
            if (entry.id != id) {
                newSchedules := Array.append(newSchedules, [entry]);
            } else {
                found := true;
            }
        };

        if (found) {
            schedules := newSchedules;
            return ?("Entry deleted successfully.");
        } else {
            return ?("Entry not found.");
        }
    };

    public func listEntries(): async [ScheduleEntry] {
        return schedules;
    };
};
