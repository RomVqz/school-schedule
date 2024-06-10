actor {
  stable var schedules : [Schedule] = [];
  
  type Schedule = {
    id: Nat;
    className: Text;
    startTime: Text;
    endTime: Text;
    dayOfWeek: Text;
  };
  
  public shared({caller}) func createSchedule(schedule: Schedule) : async () {
    schedules := Array.append(schedules, [schedule]);
  };

  public shared({caller}) func readSchedules() : async [Schedule] {
    return schedules;
  };

  public shared({caller}) func updateSchedule(updatedSchedule: Schedule) : async () {
    schedules := schedules.map(func (s) : Schedule {
      if (s.id == updatedSchedule.id) {
        return updatedSchedule;
      } else {
        return s;
      }
    });
  };

  public shared({caller}) func deleteSchedule(id: Nat) : async () {
    schedules := schedules.filter(func (s) : Bool {
      return s.id != id;
    });
  };
}
