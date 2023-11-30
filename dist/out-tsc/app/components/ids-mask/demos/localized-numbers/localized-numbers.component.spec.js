import { TestBed } from '@angular/core/testing';
import { LocalizedNumbersComponent } from './localized-numbers.component';
describe('LocalizedNumbersComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LocalizedNumbersComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LocalizedNumbersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=localized-numbers.component.spec.js.map